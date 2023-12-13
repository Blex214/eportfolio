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

Max q: This describes the point during flight where the rocket experiences the maximum dynamic pressure. Therefore, this is the most dangerous point for any rocket and is the time where the vehicle is most likely to fail. Starship was able to survive max q which is a major achievement for a rocket of this scale.

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
  {
    id: 4,
    date: 'Posted June 16, 2023',
    preview: {
      type: 'image',
      url: 'pixhawk1.png', 
      type2: 'video',
      url2:'https://www.youtube.com/embed/0DnflN9C3cc',
    },
    
    title: 'Make your own UAV with Pixhawk',
    content: 
`
I recently went down a YouTube rabbit hole and came across an amazing piece of technology. The Pixhawk is an advanced autopilot system used in unmanned aerial vehicles (UAVs) and other robotic platforms. It provides precise navigation, control, and communication capabilities, allowing for autonomous flight and mission execution with a wide range of sensors and peripherals. What makes the Pixhawk unique is that it is essentially a plug and play piece of hardware that can turn nearly anything into a completely autonomous system with GPS waypoint route planning and automated adjustments to wind. Combining a Pixhawk powered drone or plane with machine learning can be used to aid a multitude of disciplines.

Possbile applications of Pixhawk+Machine learning:
- Wild fire tracking
- Agriculture tracking
- Land surveys
- Search and rescue

Someday soon I plan on exploring making my own UAVs and applying my knowledge of Computer Science to make a powerful tool for humanity.

Pixhawks kits can be found for as low as $90 and can be installed on almost any vehicle with proper knowledge. In the video linked above, someone made a fully autonomous drone out of sticks and ducktape!

Pixhawk website: https://pixhawk.org/
`,
  },
  {
    id: 5,
    date: 'Posted June 21, 2023',
    preview: {
      type: 'image',
      url: 'chatgptguide.png', 
      type2: 'image',
      url2:'',
    },
    
    title: 'Credit to Zain Kahn for making this awesome chatgpt cheat sheet',
    content: 
    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7075084648543920129" height="undefined" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>,
  },

  {
    id: 6,
    preview: {
      type: 'video',
      url: 'https://www.youtube.com/embed/mq2hymWPN1I?si=f0YfUespaqTIZ2Xj',
      type2: 'video',
      url2:'https://www.youtube.com/embed/18pCXD709TI?si=x1zw5Y7FLB90AzbV', 
    },
    date: 'Posted November 15, 2023',
    title: 'STARSHIP SECOND FLIGHT TEST IS ALMOST HERE!!!!!',
    content: 
`
SpaceX has been hard at work these last few months making thousands of improvements to Starship, Super Heavy Booster and the Orbital Launch Mount. They recently posted two videos listed above to hype up the second launch of the most powerful rocket ever!

First Video:
This video titled "Falcon 1, Flight 4" was a look back at SpaceX when they were still learning to fly with Falcon 1 and how close the company came to going bankrupt. SpaceX was the first private company to achieve orbit which is such a stunning achievement to this day!

Second Video:
The second video was titled "Starship | Preparing for Second Flight Test" and it was exactly what it sounds like. An awesome trailer showing breathtaking views of Starbase and the fully stacked Starship and Super Heavy on the new and improved Orbital Launch Mount.

With both these videos coming out on the same day, it's clear how important SpaceX views this upcoming test to be. The excitement within SpaceX as well as the community is reaching an all time high! The first flight test was a historic achievement and I simply cannot wait to watch SpaceX light this candle for a second time.

Best of luck SpaceX!!! OCCUPY MARS!!!
`,
  },

  {
    id: 7,
    preview: {
      type: 'video',
      url: 'https://www.youtube.com/embed/C3iHAgwIYtI?si=_F27zpZ7dML0P3Vi',
      type2: 'image',
      url2:'2ndtestflight.jpg', 
    },
    date: 'Posted December 13, 2023',
    title: 'Second Flight Test was great!',
    content: 
`
On November 18th, 2023 SpaceX conducted the Second Test Flight of the Starship lauch vehicle. The flight was launched from Starbase at 7:02 AM CT. The Super Heavy booster and Starship spacecraft separated after liftoff. The Starship's engines lit up and pushed away, reaching an altitude of 92 miles. The booster then experienced multiple engine failures and exploded after starting its boostback burn. The Starship's second stage continued to fly for over 8 minutes before the flight termination system detonated. 

The second test flight improved on the first in April, which was when the spacecraft was lost just a few minutes after liftoff. SpaceX emphasized that the "test" aspect of these flights. 

Notable progress since first flight test: 
- All 39 Raptor engines worked
- The ground infrastructure left in good shape
- The "hot-staging" separation process was successful

Congrats to SpaceX!!!
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
