import {card} from '../assets';
import styles,{layout} from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a etter card deal
      <br className='sm:block hidden'/> in few easy steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Sit amet consectetur adipisicing elit. Voluptatum corrupti dolorem quibusdam 
        molestias laboriosam. Ea, ex velit rem accusamus veritatis, 
        laborum commodi nemo placeat dicta, fugit magni quis beatae optio</p>

        <Button styles='mt-10' text='Join Now'/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt='card' className='w-[100%] h-[100%]'></img>
    </div>
  </section>
  )


export default CardDeal