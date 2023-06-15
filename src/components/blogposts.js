import React from 'react';

const blogPosts = [
  {
    id: 1,
    preview: {
      type: 'video',
      url: 'https://www.youtube.com/embed/GHar0extlIM',
      type2: 'video',
      url2:'https://www.youtube.com/embed/mhJRzQsLZGg', 
    },
    date: 'Posted June 13, 2023',
    title: 'Follow MarcusHouse and NASASpaceFlight!',
    content: 
`
Ever since Starhopper I have been following SpaceX as they attempt to make the first fully reusable rocket Starship. However, all the progress has been at StarBase in remote Boca Chica, Texas. Thanks to the hard work of Youtube channels like MarcusHouse and NASASpaceFlight, I have been able to get daily updates on the construction of Starbase, each Starship iteration and even static fires. If you want to learn more about how SpaceX is planning on making life multiplanetary I highly recommend these two Youtube channels.

MarcusHouse: Weekly updates of SpaceX and many other space industry events
NASASpaceFlight: 24/7 livestream of Starbase and special live coverage of major events`,
  },
  {
    id: 2,
    date: 'Posted June 14, 2023',
    preview: {
      type: 'video',
      url: 'https://www.youtube.com/embed/_krgcofiM6M', 
      type2: 'video',
      url2:'https://www.youtube.com/embed/-1wcilQ58hI',
    },
    
    title: 'Congrats to SpaceX on a successful test of the most powerful rocket ever!',
    content: 
`
On April 17, 2023 SpaceX performed the first integrated test flight of Starship, the most powerful and fully reusable rocket ever! Even though the rocket ultimately was commanded to self destruct 6-minutes into the flight, the mission was a success! But why? It blew up didn't it? It’s important to note that this was a TEST for a first of its kind vehicle that is 2x times more powerful than the Saturn V rocket that brought humans to the Moon. The mission was successful because Starship cleared two important milestones for rockets.

-Liftoff
-Max q

Liftoff: The obvious first step for any rocket is to get off the launch pad. Starship is the most powerful rocket ever created so lifting off without a serious incident is a major milestone on its own.

Max q: This describes the point during flight where the rocket experiences the maximum dynamic pressure. Inturn this is the most dangerous point for any rocket and is the time where the vehicle is most likely to fail. Starship was able to survive max q which is a major achievement for a rocket of this scale.

Congratulations again to SpaceX for their successful test!`,
  },
  {
    id: 3,
    date: 'Posted June 15, 2023',
    preview: {
      type: 'image',
      url: 'tobypost1.jpg', 
      type2: 'image',
      url2:'tobypost2.jpg',
    },
    
    title: 'Happy 9th Birthday Toby!',
    content: 
`
`,
  },
];

const reversedBlogPosts = blogPosts.slice().reverse();

const BlogPosts = () => {
  return (
    <div style={containerStyle}>
      {reversedBlogPosts.map((post) => (
        <div key={post.id} style={postContainerStyle}>
          <p style={dateStyle}>{post.date}</p>
          <h2>{post.title}</h2>
          {post.preview.type === 'image' ? (
            <>
            {post.preview.url &&(
              <img src={require(`./images/${post.preview.url}`)} alt="Preview" style={imageStyle} />
            )}
            </>
          ) : (
            <>
              {post.preview.url && (
                <iframe
                  width="560"
                  height="315"
                  src={post.preview.url}
                  title="Preview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media"
                  style={previewStyle}
                />
              )}
            </>
          )}

          {post.preview.type2 === 'image' ? (
            <>
            {post.preview.url2 &&(
              <img src={require(`./images/${post.preview.url2}`)} alt="Preview" style={imageStyle} />
            )}
            </>
          ) : (
            <>
              {post.preview.url2 && (
                <iframe
                  width="560"
                  height="315"
                  src={post.preview.url2}
                  title="Preview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media"
                  style={previewStyle}
                />
              )}
            </>
          )}
          <code style={contentStyle}>{post.content}</code>
        </div>
      ))}
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
};

const postContainerStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '20px',
  marginBottom: '40px',
  width: '95%', // Adjust the width as per your preference
  background: '#312',
  boxShadow: '20px 20px 5px rgba(0, 0, 0, 200)'
};

const dateStyle = {
  fontSize: '40px',
  color: '#888',
};

const contentStyle = {
  whiteSpace: 'pre-wrap',
  color: '#ffffff',
  fontSize: '40px',
  margin: '0',
  padding:'10px',
  font: 'Times New Roman',
};

const previewStyle = {
  maxWidth: '100%',
  marginBottom: '10px',
};
const imageStyle = {
  maxWidth: '50%',
  marginBottom: '10px',
};

export default BlogPosts;
