import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import getArea from "../calculation/areaCalculation";
import { useState } from "react";

const schema = z.object({
    side1_ft: z
        .number({ invalid_type_error: "Give correct measurement." })
        .min(0)
        .max(100_100),
    side1_inch: z
        .number({ invalid_type_error: "Give correct measurement." })
        .min(0)
        .max(100_100),
    side2_ft: z
        .number({ invalid_type_error: "Give correct measurement." })
        .min(0)
        .max(100_100),
    side2_inch: z
        .number({ invalid_type_error: "Give correct measurement." })
        .min(0)
        .max(100_100),
    side3_ft: z
        .number({ invalid_type_error: "Give correct measurement." })
        .min(0)
        .max(100_100),
    side3_inch: z
        .number({ invalid_type_error: "Give correct measurement." })
        .min(0)
        .max(100_100),
    side4_ft: z
        .number({ invalid_type_error: "Give correct measurement." })
        .min(0)
        .max(100_100),
    side4_inch: z
        .number({ invalid_type_error: "Give correct measurement." })
        .min(0)
        .max(100_100),
    diagonal_ft: z
        .number({ invalid_type_error: "Give correct measurement." })
        .min(0)
        .max(100_100),
    diagonal_inch: z
        .number({ invalid_type_error: "Give correct measurement." })
        .min(0)
        .max(100_100),
});

export type MeasurementFormData = z.infer<typeof schema>;

const InputQuadrilateral = () => {
    const [area, setArea] = useState<null | number>(null);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<MeasurementFormData>({ resolver: zodResolver(schema) });

    return (
        <>
            <form
                onSubmit={handleSubmit((data) => {
                    console.log(data)
                    const {areaInSFT} = getArea(data);
                    setArea(areaInSFT);
                })}
            >
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="side1_ft">First Side in feet</label>
                            <input
                                className="form-control"
                                {...register("side1_ft", {
                                    valueAsNumber: true,
                                })}
                                id="side1_ft"
                                type="number"
                            />
                            {errors.side1_ft && (
                                <p className="text-danger">
                                    {errors.side1_ft?.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="side1_inch">
                                First Side in Inch
                            </label>
                            <input
                                className="form-control"
                                type="number"
                                {...register("side1_inch", {
                                    valueAsNumber: true,
                                })}
                            />
                            {errors.side1_inch && (
                                <p className="text-danger">
                                    {errors.side1_inch?.message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="side2_ft">
                                Second Side in feet
                            </label>
                            <input
                                className="form-control"
                                {...register("side2_ft", {
                                    valueAsNumber: true,
                                })}
                                id="side2_ft"
                                type="number"
                            />
                            {errors.side2_ft && (
                                <p className="text-danger">
                                    {errors.side2_ft.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="side2_inch">
                                Second Side in Inch
                            </label>
                            <input
                                className="form-control"
                                type="number"
                                {...register("side2_inch", {
                                    valueAsNumber: true,
                                })}
                            />
                            {errors.side2_inch && (
                                <p className="text-danger">
                                    {errors.side2_inch?.message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="side3_ft">Third Side in feet</label>
                            <input
                                className="form-control"
                                {...register("side3_ft", {
                                    valueAsNumber: true,
                                })}
                                id="side3_ft"
                                type="number"
                            />
                            {errors.side3_ft && (
                                <p className="text-danger">
                                    {errors.side3_ft.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="side3_inch">
                                Third Side in Inch
                            </label>
                            <input
                                className="form-control"
                                type="number"
                                {...register("side3_inch", {
                                    valueAsNumber: true,
                                })}
                            />
                            {errors.side3_inch && (
                                <p className="text-danger">
                                    {errors.side3_inch?.message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="side4_ft">
                                Fourth Side in feet
                            </label>
                            <input
                                className="form-control"
                                {...register("side4_ft", {
                                    valueAsNumber: true,
                                })}
                                id="side4_ft"
                                type="number"
                            />
                            {errors.side4_ft && (
                                <p className="text-danger">
                                    {errors.side4_ft.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="side4_inch">
                                Fourth Side in Inch
                            </label>
                            <input
                                className="form-control"
                                type="number"
                                {...register("side4_inch", {
                                    valueAsNumber: true,
                                })}
                            />
                            {errors.side4_inch && (
                                <p className="text-danger">
                                    {errors.side4_inch?.message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="diagonal_ft">
                                Diagonal in Feet
                            </label>
                            <input
                                className="form-control"
                                {...register("diagonal_ft", {
                                    valueAsNumber: true,
                                })}
                                id="diagonal_ft"
                                type="number"
                            />
                            {errors.diagonal_ft && (
                                <p className="text-danger">
                                    {errors.diagonal_ft?.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="diagonal_inch">
                                Diagonal in Inch
                            </label>
                            <input
                                className="form-control"
                                type="number"
                                {...register("diagonal_inch", {
                                    valueAsNumber: true,
                                })}
                            />
                            {errors.diagonal_inch && (
                                <p className="text-danger">
                                    {errors.diagonal_inch?.message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <button className="btn btn-primary mt-3">Submit</button>
            </form>
            {area && <h2>Area is: {area}square feet</h2>}
        </>
    );
};

export default InputQuadrilateral;
