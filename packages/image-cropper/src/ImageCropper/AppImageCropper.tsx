"use client";
import Box from "@mui/material/Box";
import {
  FC,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ReactCrop, { Crop, PixelCrop, ReactCropProps } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export type AppImageCropperProps = Omit<ReactCropProps, "crop" | "onChange"> & {
  image: Blob;
  cropImageRef?: Ref<{ cropImage: () => Promise<Blob | null> }>;
  cropConfig?: Crop;
};

const AppImageCropper: FC<AppImageCropperProps> = (
  props: AppImageCropperProps
) => {
  const { image, cropImageRef, cropConfig, ...rest } = props;
  const [crop, setCrop] = useState<Crop>(
    cropConfig ?? { unit: "px", x: 0, y: 0, width: 300, height: 300 }
  );
  const [imageUrl, setImageUrl] = useState<string>();

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setImageUrl(URL.createObjectURL(image));
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [image]);

  useImperativeHandle(cropImageRef, () => ({
    async cropImage() {
      const cropImage = imageRef.current;
      if (!cropImage) return null;

      const canvas = document.createElement("canvas");
      const scaleX = cropImage.naturalWidth / cropImage.width;
      const scaleY = cropImage.naturalHeight / cropImage.height;
      canvas.width = crop.width;
      canvas.height = crop.height;

      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      ctx.drawImage(
        cropImage,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );

      const blob = await new Promise((resolve: (blob: Blob | null) => void) =>
        canvas.toBlob(resolve)
      );
      return blob;
    },
  }));

  return (
    <ReactCrop {...rest} crop={crop} onChange={(c: PixelCrop) => setCrop(c)}>
      <Box ref={imageRef} component="img" src={imageUrl} width="100%" />
    </ReactCrop>
  );
};

export default AppImageCropper;
