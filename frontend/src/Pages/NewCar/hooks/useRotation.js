
import { useState } from 'react';
export const useRotation = () => {
    const [degree, setDegree] = useState(0);
    const leftRotate = () => setDegree((prev) => prev - 90);
    const rightRotate = () => setDegree((prev) => prev + 90);
    return { degree, leftRotate, rightRotate };
}