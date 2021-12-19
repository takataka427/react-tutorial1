export async function fetchImages(breed) {
    const response = await fetch(
      `https://thatcopy.pw/catapi/restId/${breed}`
    );
    const data = await response.json();
    return data.url;
  }