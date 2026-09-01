const createCounter = () => {
    let count = 0;

    return () => {
        count++;
        console.log(count);
    };
};

const counter = createCounter();

counter();
counter();
counter();