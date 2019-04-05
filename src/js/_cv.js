const cv = () => {

    const $cv = Array.from( document.querySelectorAll('.j-cv') );

    $cv.forEach((cv,i) => {
        if (i !== 0) {
            cv.parentNode.replaceChild($cv[0].cloneNode(true), cv);
        }
    });

    const $specialInstructor = Array.from( document.querySelectorAll('.j-special-instructor') );

    $specialInstructor.forEach((instructor,i) => {
        if (i !== 0) {
            instructor.parentNode.replaceChild($specialInstructor[0].cloneNode(true), instructor);
        }
    });

}

export default cv;