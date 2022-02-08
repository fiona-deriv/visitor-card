import React, { useEffect, useState } from 'react'
import Card from './card'
import vCardsJS from 'vcards-js'

const MyForm = () => {
    const [firstName, setName] = useState('')
    const [lastName, setlastName] = useState('')
    const [mobileName, setmobileName] = useState('')
    const [faxName, setfaxName] = useState('')
    const [emailName, setemailName] = useState('')
    const [companyName, setcompanyName] = useState('')
    const [streetName, setstreetName] = useState('')
    const [cityName, setcityName] = useState('')
    const [zipName, setzipName] = useState('')
    const [stateName, setstateName] = useState('')
    const [countryName, setcountryName] = useState('')
    const [websiteName, setwebsiteName] = useState('')
    const [qrCodeUrl, setQrCode] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`The name you entered is ${firstName}
        The name you entered is ${lastName}
        The name you entered is ${mobileName}
        The name you entered is ${faxName}
        The name you entered is ${emailName}
        The name you entered is ${companyName}
        The name you entered is ${streetName}
        The name you entered is ${cityName}
        The name you entered is ${zipName}
        The name you entered is ${stateName}
        The name you entered is ${countryName}
        The name you entered is ${websiteName}
        `)
    }

    const vCard = vCardsJS()

    vCard.firstName = firstName;
    vCard.lastName = lastName;
    vCard.workPhone = mobileName;

    // get as formatted string and encode it
    const vCardString = vCard.getFormattedString()
    const vCardEncodedString = encodeURIComponent(vCardString)

    useEffect(() => {
        setQrCode(
            `https://chart.googleapis.com/chart?chs=300x300&choe=UTF-8&chld=M%7C0&cht=qr&chl=${vCardEncodedString}&companyname=${companyName}`,
        )
    }, [companyName])
    return (
        <div className="container_box">
            <div className="card_container">
                <Card
                    id="front_side"
                    firstName={firstName}
                    lastName={lastName}
                    email={emailName}
                    company={companyName}
                    mobile={mobileName}
                    fax={faxName}
                    front={true}
                    qrcode={<img src={qrCodeUrl} className="QR_code" />}
                />   
                <Card
                    id="back_side"
                    country={countryName}
                    city={cityName}
                    state={stateName}
                    street={streetName}
                    zip={zipName}
                    website={websiteName}
                />
            </div>
            <div className="content form_container">
                <h1> Generating your visiting card</h1>
                <form className="form-page" onSubmit={handleSubmit}>
                    <label>Your Name </label>
                    <input
                        type="text"
                        name="name"
                        size="30"
                        value={firstName}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="First name"
                        required
                    />
                    <input
                        type="text"
                        name="lname"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                        placeholder=" Last name"
                    />
                    <label>Contact </label>
                    <input
                        type="number"
                        name="mobile"
                        value={mobileName}
                        required
                        onChange={(e) => setmobileName(e.target.value)}
                        placeholder="Mobile"
                    />
                    <input
                        type="number"
                        name="fax"
                        value={faxName}
                        onChange={(e) => setfaxName(e.target.value)}
                        placeholder="Fax"
                    />
                    <label>Email </label>
                    <input
                        type="email"
                        name="email"
                        value={emailName}
                        required
                        onChange={(e) => setemailName(e.target.value)}
                        placeholder="Your@email.com"
                    />
                    <label>Company </label>
                    <input
                        type="text"
                        name="company"
                        value={companyName}
                        onChange={(e) => setcompanyName(e.target.value)}
                    />
                    <label>Address </label>
                    <input
                        type="text"
                        name="street"
                        value={streetName}
                        onChange={(e) => setstreetName(e.target.value)}
                        required
                        minLength={5}
                        maxLength={50}
                        placeholder="Address"
                    />
                    <label>City </label>
                    <input
                        type="text"
                        name="city"
                        value={cityName}
                        required
                        onChange={(e) => setcityName(e.target.value)}
                        placeholder="City"
                    />
                    <input
                        type="number"
                        name="zip"
                        value={zipName}
                        required
                        onChange={(e) => setzipName(e.target.value)}
                        placeholder="ZIP"
                    />
                    <label>State </label>
                    <input
                        type="text"
                        name="state"
                        value={stateName}
                        required
                        onChange={(e) => setstateName(e.target.value)}
                        placeholder="State"
                    />
                    <label>Country </label>
                    <input
                        type="text"
                        name="country"
                        value={countryName}
                        required
                        onChange={(e) => setcountryName(e.target.value)}
                        placeholder="Country"
                    />
                    <label>Website</label>
                    <input
                        type="text"
                        name="website"
                        value={websiteName}
                        onChange={(e) => setwebsiteName(e.target.value)}
                        placeholder="www.your-website.com"
                    />
                    <div className="button-content">
                        <button className="btn-container" type="submit">
                            <span> Submit</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MyForm
