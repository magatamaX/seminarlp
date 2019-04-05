import { AddClass, RemoveClass, HasClass } from "mgn-utility"

const fixedButton = () => {

    const $button = document.querySelector('.j-fixed-button');
    const target = document.getElementById('j-fixedButton-target');

    if ( !target ) {
        return;
    }


    if ( !window.IntersectionObserver ) {

        // InterSectionObserver未対応ブラウザ
        const getScrollTop = () => {
            return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        }

        window.addEventListener('load', () => {

            const TARGET_POSITION = target.getBoundingClientRect().bottom;

            const handleScroll = (e) => {

                if ( getScrollTop() > TARGET_POSITION ) {
                    if ( !HasClass( $button, 'on') ) {
                        AddClass( $button, 'on');
                    }
                    return;
                }

                if ( HasClass( $button, 'on') ) {
                    RemoveClass( $button, 'on');
                }   

            }

            window.addEventListener('scroll', handleScroll, false);

        });

        return;
    }


    const callback = (entries) => {
        entries.forEach(entry => {
            
            if ( !entry.isIntersecting ) {
                if ( !HasClass( $button, 'on') ) {
                    AddClass( $button, 'on');
                }
                return;
            }

            if ( HasClass( $button, 'on') ) {
                RemoveClass( $button, 'on');
            }   

          });
    }
    const observer = new IntersectionObserver(callback);
    observer.observe(target);

}

export default fixedButton;