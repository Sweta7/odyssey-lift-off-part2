export const resolvers = {
  Query: {
    // get all tracks, will be used to populate the homepage grid of our web client
    tracksForHome: (parent, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    // to test how much node fetch takes to fetch data
    tracksForHomeFetch: async () => {
      const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
      const res = await fetch(`${baseUrl}/tracks`);
      return res.json();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    // using fetch instead of dataSources
    // author: async ({ authorId }, _, { dataSources }) => {
    //   const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
    //   const res = await fetch(`${baseUrl}/author/${authorId}`);
    //   return res.json();
    // },
  },
};
