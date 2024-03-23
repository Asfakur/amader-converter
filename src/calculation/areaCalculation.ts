import { MeasurementFormData } from "../components/InputQuadrilateral";

const inchToFeet = (inch: number) => {
    return inch / 12;
};

const calculateTriangle = (first: number, second: number, common: number) => {
    let sp = (first + second + common) / 2;
    let a = sp * (sp - first) * (sp - second) * (sp - common);
    return Math.sqrt(a);
};

// area of a Quadrilateral
const getArea = (data: MeasurementFormData) => {
    let first = data.side1_ft + inchToFeet(data.side1_inch);
    let second = data.side2_ft + inchToFeet(data.side2_inch);
    let third = data.side3_ft + inchToFeet(data.side3_inch);
    let fourth = data.side4_ft + inchToFeet(data.side4_inch);
    let diagonal = data.diagonal_ft + inchToFeet(data.diagonal_inch);

    let a1 = calculateTriangle(first, second, diagonal);
    let a2 = calculateTriangle(third, fourth, diagonal);
    let areaInSFT = a1 + a2;
    let areaInSTK = areaInSFT / 435.6;
    
    return {areaInSFT,areaInSTK};
};
export default getArea;
