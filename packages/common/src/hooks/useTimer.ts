"use client";
import { useEffect, useRef, useState } from "react";

interface TimerOptions {
  restart: (restartTimeInSeconds?: number) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  remainingTime: number;
}

const DEFAULT_DELAY = 1000;
const getDelayFromExpirationTimestamp = (
  expirationTimeStamp: number
): number | null => {
  const isValid = new Date(expirationTimeStamp).getTime() > 0;
  if (!isValid) return null;

  const seconds = getSecondsFromExpiration(expirationTimeStamp);
  const extraMilliSeconds = Math.floor((seconds - Math.floor(seconds)) * 1000);
  return extraMilliSeconds > 0 ? extraMilliSeconds : DEFAULT_DELAY;
};

const getExpirationTimeStamp = (timeInSeconds: number): number => {
  const now = new Date();
  return now.setSeconds(now.getSeconds() + timeInSeconds);
};

export const getSecondsFromExpiration = (
  expirationTimeStamp: number,
  shouldRound = true
): number => {
  const now = new Date().getTime();
  const milliSecondsDistance = expirationTimeStamp - now;
  if (milliSecondsDistance > 0) {
    const val = milliSecondsDistance / 1000;
    return shouldRound ? Math.round(val) : val;
  }
  return 0;
};

export const useTimer = (
  timeInSeconds: number,
  callBack: (() => void | Promise<void>) | undefined
): TimerOptions => {
  const [expirationTimestamp, setExpirationTimestamp] = useState(
    getExpirationTimeStamp(timeInSeconds)
  );
  const [seconds, setSeconds] = useState(timeInSeconds);
  const [isRunning, setIsRunning] = useState(true);
  const [delay, setDelay] = useState(
    getDelayFromExpirationTimestamp(expirationTimestamp)
  );

  const handleExpiration = () => {
    callBack && typeof callBack === "function" && callBack();
    setIsRunning(false);
    setDelay(null);
  };

  const pause = () => {
    setIsRunning(false);
  };

  const restart = (newTimeInSeconds?: number) => {
    const newExpirationTimeStamp = getExpirationTimeStamp(
      newTimeInSeconds || timeInSeconds
    );
    setDelay(getDelayFromExpirationTimestamp(newExpirationTimeStamp));
    setIsRunning(true);
    setExpirationTimestamp(newExpirationTimeStamp);
    setSeconds(getSecondsFromExpiration(newExpirationTimeStamp));
  };

  const resume = () => {
    restart(seconds);
  };

  const stop = () => {
    pause();
  };

  useInterval(
    () => {
      if (delay !== DEFAULT_DELAY) {
        setDelay(delay);
      }
      setSeconds(getSecondsFromExpiration(expirationTimestamp, true));
      if (seconds <= 0) {
        handleExpiration();
      }
    },
    isRunning ? delay : null
  );

  return { restart, pause, resume, stop, remainingTime: seconds };
};

function useInterval(
  callback: (() => void | Promise<void>) | undefined,
  delayInMilliSeconds: number | null
) {
  const savedCallback = useRef<(() => void | Promise<void>) | undefined>();

  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    if (!delayInMilliSeconds) {
      return () => {};
    }

    const interval = setInterval(() => {
      savedCallback.current && savedCallback.current();
    }, delayInMilliSeconds);

    return () => clearInterval(interval);
  }, [delayInMilliSeconds]);
}
