import '@splidejs/react-splide/css/skyblue';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import arPreviewImage from '../assets/ar_preview.png?url';
import chooseDifferentSizeImage from '../assets/choose_different_size.png?url';
import ensureCorrectSizeImage from '../assets/ensure_correct_size.png?url';
import explanationModalImage from '../assets/explanation_modal_image.png?url';
import qrCodeModalImage from '../assets/qr_code_modal.png?url';
import styles from './Slider.module.scss';

export const Slider = () => (
    <Splide className={ styles.slider } options={ options }>
        <Slide src={ explanationModalImage } caption="1. Experience augmented reality"/>
        <Slide src={ qrCodeModalImage } caption="2. Scan QR code to get started"/>
        <Slide src={ arPreviewImage } caption="3. AR mode placeholder"/>
        <Slide src={ ensureCorrectSizeImage } caption="4. (optional) Ensure correct product size has been selected"/>
        <Slide src={ chooseDifferentSizeImage } caption="5. (optional) Choose new size if previous was incorrect"/>
    </Splide>
);

const options = {
    classes: {
        arrow: 'splide__arrow ' + styles.arrow,
        prev: 'splide__arrow--prev ' + styles.prev,
        next: 'splide__arrow--next ' + styles.next,
    },
};

const Slide = ({ src, caption }: SlideProps) => (
    <SplideSlide>
        <figure className={ styles.figure }>
            <div className={ styles.ratioContainer }>
                <img src={ src } className={ styles.image } alt={ caption } title={ caption }/>
            </div>
            <figcaption className={ styles.figureCaption }>{ caption }</figcaption>
        </figure>
    </SplideSlide>
);

type SlideProps = {
    src: string;
    caption: string;
};