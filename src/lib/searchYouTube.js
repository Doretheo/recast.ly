var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https.//www.googleapis.com/youtube/v4/search', {
    type: 'video',
    key: key,
    q: query,
    max: max,
    videoEmbed: 'true',
    part: 'snippet'
  }),

  finished(({items}) => {
    if (callback) {
      callback(items);
    }
  }),

  error(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) => console);
  });
};

export default searchYouTube;
