import React from 'react'

export default function SmallHeader() {
    return (
        <>
            <div className="container-fluid">
                <div className="smallHeader_Wrapper">
                    <div className="header_list">
                        <ul className="list">
                            <li className="listItems">All</li>
                            <li className="listItems">All data </li>
                            <li className="listItems">All</li>
                            <li className="listItems">All</li>
                            <li className="listItems">All</li>
                        </ul>
                    </div>
                    <div className="deals_data">
                        <ul className="deals_list">
                            <li className="deals_listItem">New Year , new deal</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
