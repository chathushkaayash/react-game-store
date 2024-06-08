const getCroppedImageUrl = (url: string) => {
  if (!url) return "";

  const target = "media/";
  const splittedUrl = url.split(target);
  return splittedUrl[0] + target + "crop/600/400/" + splittedUrl[1];
};

export default getCroppedImageUrl;
