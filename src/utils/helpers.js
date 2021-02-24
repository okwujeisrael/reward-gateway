import { dummy } from './dummy'

export const getBio = (bio) => {
  if (!bio || bio === '0') return 'n/a';
  let formattedBio = bio
    .replaceAll('<pre>','<p>')
    .replaceAll('</pre>','</p>')
  return formattedBio.substring(0, 100);
}

export const getAvatar = (avatar) => {
  if (avatar === 'http://httpstat.us/503' || avatar === '0') return dummy;
  return avatar;
}
