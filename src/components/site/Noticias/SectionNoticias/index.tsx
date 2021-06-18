/* eslint-disable import/no-duplicates */
import { formatDistanceToNow, subDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import useStyles from './styles';

export default function SectionNoticias() {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h1 className={classes.sectionTitle}>Notícias</h1>

        <div>
          <div className={classes.notice}>
            <img
              src="https://picsum.photos/170/100"
              alt="Some Img"
              className={classes.thumb}
            />

            <div className={classes.texts}>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                praesentium doloremque ab. Eveniet provident voluptatem nostrum
                corrupti illo!
              </h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                magni porro cum nihil est hic ducimus, consequuntur provident
                blanditiis rerum nobis, rem quidem nesciunt reiciendis!
              </span>
              <small>
                {formatDistanceToNow(subDays(new Date(), 15), {
                  locale: ptBR,
                })}
              </small>
            </div>
          </div>

          <div className={classes.notice}>
            <img
              src="https://picsum.photos/170/100"
              alt="Some Img"
              className={classes.thumb}
            />

            <div className={classes.texts}>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur odit officiis doloremque reprehenderit labore,
                provident blanditiis.
              </h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                magni porro cum nihil est hic ducimus, consequuntur provident
                blanditiis rerum nobis, rem quidem nesciunt reiciendis!
              </span>
              <small>
                {formatDistanceToNow(subDays(new Date(), 45), {
                  locale: ptBR,
                })}
              </small>
            </div>
          </div>

          <div className={classes.notice}>
            <img
              src="https://picsum.photos/170/100"
              alt="Some Img"
              className={classes.thumb}
            />

            <div className={classes.texts}>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                quam voluptatum dolorum quo provident laborum maxime excepturi
                deserunt sequi pariatur?
              </h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                magni porro cum nihil est hic ducimus, consequuntur provident
                blanditiis rerum nobis, rem quidem nesciunt reiciendis!
              </span>
              <small>
                {formatDistanceToNow(subDays(new Date(), 45), {
                  locale: ptBR,
                })}
              </small>
            </div>
          </div>

          <div className={classes.notice}>
            <img
              src="https://picsum.photos/170/100"
              alt="Some Img"
              className={classes.thumb}
            />

            <div className={classes.texts}>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                accusantium labore quod ab quasi fuga.
              </h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                magni porro cum nihil est hic ducimus, consequuntur provident
                blanditiis rerum nobis, rem quidem nesciunt reiciendis!
              </span>
              <small>
                {formatDistanceToNow(subDays(new Date(), 45), {
                  locale: ptBR,
                })}
              </small>
            </div>
          </div>

          <div className={classes.notice}>
            <img
              src="https://picsum.photos/170/100"
              alt="Some Img"
              className={classes.thumb}
            />

            <div className={classes.texts}>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo aliquid in repellat tempora nam impedit!
              </h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                magni porro cum nihil est hic ducimus, consequuntur provident
                blanditiis rerum nobis, rem quidem nesciunt reiciendis!
              </span>
              <small>
                {formatDistanceToNow(subDays(new Date(), 45), {
                  locale: ptBR,
                })}
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
