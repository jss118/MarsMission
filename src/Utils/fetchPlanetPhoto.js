export const fetchPlanetPhoto = async url => {
  return await fetch(url).then(result => result.url);
};
