const doFetch = async (url, options) => {
  try{
    console.log(url);
    const response = await fetch(url, options);
    const json = await response.json();
    if (json.error) {
      throw new Error(json.message + ': ' + json.error);
    } else if (!response.ok) {
      throw new Error('fetch failed');
    } else {
      return json;
    }
  } catch (e) {
    console.log(e);
  }
};

export {doFetch};
