import React from 'react'

import {ReactComponent as FbSvg} from '../../assets/images/common/fb.svg'
import {ReactComponent as TwitterSvg} from '../../assets/images/common/twitter.svg'
import {ReactComponent as MessageSvg} from '../../assets/images/common/message.svg'

function TeamCard({avatar, name, role, description, facebookUrl, twitterUrl, messageUrl}) {
  return (
    <div
      className="p-4 lg:w-1/4 md:w-1/2 cursor-pointer hover:shadow-lg"
      data-aos="fade-up-right"
    >
      <div className="h-full flex flex-col items-center text-center">
        <img
          alt={name}
          className="flex-shrink-0 rounded-full w-56 h-56 object-cover object-center mb-4"
          //   src={"https://dummyimage.com/203x203"}
          src={avatar}
        />
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-300">
            {name}
          </h2>
          <h3 className="text-gray-400 mb-3">{role}</h3>
          <p className="mb-4">{description}</p>
          <span className="inline-flex">
            {facebookUrl && (
              <a
                className="text-gray-500"
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FbSvg />
              </a>
            )}
            {twitterUrl && (
              <a
                className="ml-2 text-gray-500"
                href={twitterUrl}
                target="_blank"
                rel="noreferrer"
              >
                <TwitterSvg />
              </a>
            )}
            {messageUrl && (
              <a
                className="ml-2 text-gray-500"
                href={messageUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageSvg />
              </a>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TeamCard