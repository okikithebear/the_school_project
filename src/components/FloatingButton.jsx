import React from 'react'

const FloatingButton = ({ modalActions }) => {
    return (


        <div className="flex floating-action-button z-[999] flex-row fixed bottom-12 right-4 md:right-10  cursor-pointer shadow-lg rounded-full"
            onClick={() => modalActions.handleModal(modalActions.showModal)}>

            <span className="flex text-darkgreenVariant bg-darkBlue1 rounded-full font-mulish font-semibold py-2.5 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M9.7625 2.5H20.2388C24.1 2.5 26.25 4.725 26.25 8.5375V21.45C26.25 25.325 24.1 27.5 20.2388 27.5H9.7625C5.9625 27.5 3.75 25.325 3.75 21.45V8.5375C3.75 4.725 5.9625 2.5 9.7625 2.5ZM10.1 8.325V8.3125H13.8363C14.375 8.3125 14.8125 8.75 14.8125 9.28625C14.8125 9.8375 14.375 10.275 13.8363 10.275H10.1C9.56125 10.275 9.125 9.8375 9.125 9.3C9.125 8.7625 9.56125 8.325 10.1 8.325ZM10.1 15.925H19.9C20.4375 15.925 20.875 15.4875 20.875 14.95C20.875 14.4125 20.4375 13.9737 19.9 13.9737H10.1C9.56125 13.9737 9.125 14.4125 9.125 14.95C9.125 15.4875 9.56125 15.925 10.1 15.925ZM10.1 21.6375H19.9C20.3988 21.5875 20.775 21.1613 20.775 20.6625C20.775 20.15 20.3988 19.725 19.9 19.675H10.1C9.725 19.6375 9.3625 19.8125 9.1625 20.1375C8.9625 20.45 8.9625 20.8625 9.1625 21.1875C9.3625 21.5 9.725 21.6875 10.1 21.6375Z"
                        fill="#70BF4B" />
                </svg>
                <span className="pt-0.5">{modalActions.showModal === true ? 'Close' : 'Apply Here'}</span>
            </span>
        </div>
    )
}

export default FloatingButton