import React from 'react'
import PropTypes from 'prop-types'

const Card = ({
    firstName,
    lastName,
    email,
    company,
    website,
    mobile,
    fax,
    country,
    city,
    state,
    street,
    zip,
    front,
    id,
    qrCode,
}) => {
    return (
        <div className="card" id={id}>
            <div className="left_shape"></div>
            <div className="info_box">
                <div className="info_datails">
                    {front && (
                        <div className="front_side">
                            <p className="name">
                                Name: {lastName} {firstName}
                            </p>
                            <p className="mobile"> Mobile: {mobile} </p>
                            <p> Fax: {fax}</p>
                            <p className="mail"> Email: {email} </p>
                        </div>
                    )}
                    {!front && (
                        <div className="back_side">
                            <p className="address">
                                Adreess: {country && `${country}, `}
                                {state && `${state}, `}
                                {city && `${city}, `}
                                {street}
                            </p>
                            <p className="zipcode"> ZipCode: {zip} </p>
                            <p className="website"> Website: {website} </p>
                        </div>
                    )}
                </div>
            </div>
            {front && (
                <div className="QR_code_box">
                    <p className="company"> {company}</p>
                    <div className="QR_code"> {qrCode}</div>
                </div>
            )}
            {!front && <div className="right_shape"></div>}
        </div>
    )
}

Card.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    company: PropTypes.string,
    website: PropTypes.string,
    mobile: PropTypes.string,
    fax: PropTypes.string,
    country: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    street: PropTypes.string,
    zip: PropTypes.string,
    front: PropTypes.bool,
    id: PropTypes.string,
    qrCode: PropTypes.any,
}

export default Card
