import React from 'react';
import { CSSProperties } from "react";
import GridLoader from "react-spinners/GridLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

type Props = {
    loading: boolean;
}

const LoadingSpinner = ({ loading }: Props) => {
    return (
        <div className="sweet-loading">
            <GridLoader
                color={'#FF6969'}
                loading={loading}
                cssOverride={override}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoadingSpinner;