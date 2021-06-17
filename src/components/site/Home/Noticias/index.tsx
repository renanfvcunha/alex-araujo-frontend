import useStyles from './styles';

export default function Noticias() {
  const classes = useStyles();

  return (
    <section id="noticias" className={classes.section}>
      <div className={classes.container}>
        <h1 className={classes.sectionTitle}>Notícias</h1>

        <ul className={classes.noticesContainer}>
          <li className={classes.notice}>
            <img
              src="https://i.picsum.photos/id/548/200/200.jpg?hmac=OSCQ-YL2a-5iYm7-5vVwigtt78bNIZFxNRaWP8pZ_bw"
              alt="Picsum IMG"
              className={classes.noticePicture}
            />
            <div className={classes.noticeTitle}>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto laboriosam amet assumenda quia ab expedita?
              </h1>
              <h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat illum, recusandae eum sapiente ab esse facere culpa
                labore reprehenderit autem tempora dolores enim consequatur!
                Mollitia dolorem, aut non consequuntur impedit perferendis
                accusamus quae eius? Dolor exercitationem, voluptatem voluptates
                accusantium, praesentium debitis excepturi doloremque tempore
                molestiae aperiam, error nisi reprehenderit dolorum.
              </h2>
            </div>
          </li>
          <li className={classes.notice}>
            <img
              src="https://i.picsum.photos/id/548/200/200.jpg?hmac=OSCQ-YL2a-5iYm7-5vVwigtt78bNIZFxNRaWP8pZ_bw"
              alt="Picsum IMG"
              className={classes.noticePicture}
            />
            <div className={classes.noticeTitle}>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto laboriosam amet assumenda quia ab expedita?
              </h1>
              <h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat illum, recusandae eum sapiente ab esse facere culpa
                labore reprehenderit autem tempora dolores enim consequatur!
                Mollitia dolorem, aut non consequuntur impedit perferendis
                accusamus quae eius? Dolor exercitationem, voluptatem voluptates
                accusantium, praesentium debitis excepturi doloremque tempore
                molestiae aperiam, error nisi reprehenderit dolorum.
              </h2>
            </div>
          </li>
          <li className={classes.notice}>
            <img
              src="https://i.picsum.photos/id/548/200/200.jpg?hmac=OSCQ-YL2a-5iYm7-5vVwigtt78bNIZFxNRaWP8pZ_bw"
              alt="Picsum IMG"
              className={classes.noticePicture}
            />
            <div className={classes.noticeTitle}>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto laboriosam amet assumenda quia ab expedita?
              </h1>
              <h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat illum, recusandae eum sapiente ab esse facere culpa
                labore reprehenderit autem tempora dolores enim consequatur!
                Mollitia dolorem, aut non consequuntur impedit perferendis
                accusamus quae eius? Dolor exercitationem, voluptatem voluptates
                accusantium, praesentium debitis excepturi doloremque tempore
                molestiae aperiam, error nisi reprehenderit dolorum.
              </h2>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
