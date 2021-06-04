import useStyles from './styles';

export default function QuemSomos() {
  const classes = useStyles();

  return (
    <section id="quem-somos" className={classes.section}>
      <div className={classes.container}>
        <div className={classes.divider}>
          <div className={classes.texts}>
            <div className={classes.headings}>
              <h1>Quem Somos</h1>
              <h2>Nossa História</h2>
            </div>
            <div className={classes.content}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, ipsa maxime maiores labore corrupti modi in laboriosam
                beatae delectus quas laudantium molestiae inventore minus, cum
                temporibus odit incidunt natus aut iusto a quo iste? Sunt atque,
                alias quae illo quod perspiciatis hic qui accusamus sapiente
                eligendi perferendis tenetur minima optio?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                sed culpa modi provident ex earum ullam! Voluptatibus iure nam
                cupiditate, eum quasi odio eligendi esse totam quam beatae, sit
                aliquam eos assumenda quae, consequatur fuga. In quod debitis
                soluta! Quos.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum nisi sint animi sed aliquam inventore accusantium
                pariatur deserunt reprehenderit quibusdam aperiam, temporibus
                nemo amet quos necessitatibus. Dicta perferendis alias ducimus,
                sequi nostrum quibusdam magni! Asperiores ut, quam sit
                voluptatibus quia nisi non adipisci quae ea! Nemo beatae, cumque
                quaerat expedita omnis reprehenderit, ullam aliquid atque a eum
                et dolorum temporibus?
              </p>
            </div>
          </div>
          <div className={classes.video}>
            <iframe
              src="https://www.youtube.com/embed/6stlCkUDG_s"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
