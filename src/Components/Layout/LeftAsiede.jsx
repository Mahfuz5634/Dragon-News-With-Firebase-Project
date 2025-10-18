import React, { Suspense } from 'react';
import Categories from './Categories';

const LeftAsiede = () => {
    return (
        <div>
        <Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>
               <Categories></Categories>
        </Suspense>
        </div>
    );
};

export default LeftAsiede;