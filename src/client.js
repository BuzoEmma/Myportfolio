import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: 'eejceq9v',
  dataset: "production",
  apiVersion: "2023-12-01",
  useCdn: true,
  token: "skboFTRdyAqZtg6x2TWHb9YnsGEdTiZScnSWb6X5TmMA2TZneItU4ShTXyCPEhQ1j9fVFPxzB2SCHmvbpKMyXhkacI92ODlChqZuxHKEA7wL17MlTi4etzO7hv7qRf51oPF9aVHYbS2JfRmqApeYNCk9cRAzf51KIGvup5NMHh7yzYANvPgc",
  ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)

;


// token: process.env.REACT_APP_sANITY_TOKEN,e
// projectId: process.env.REACT_APP_sANITY_PROJECT_ID,

