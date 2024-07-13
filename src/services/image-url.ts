// optimize image for cards

export const getCroppedImageUrl = (url: string) => {
  const target = "media/"; //targeting media/ name
  const index = url.indexOf(target) + target.length; //but index give the starting point then why media/ instead 'm or media' beacause ('media' and 'm' or 'me') may come lot of places js took the first match thats why we use 'media/'
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
