const Icons = () => {
  return (
    <>
      <div className="px-6 py-4">
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-b border-gray-300"></div>
          </div>
          <div className="relative flex justify-center"></div>
        </div>
        <p className="text-xl mb-2">
          Over 5 million books ready to ship, 3.6 million eBooks and 300,000
          audiobooks to download right now! Curbside pickup available in most
          stores!
        </p>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-b border-gray-300"></div>
          </div>
          <div className="relative flex justify-center"></div>
        </div>
      </div>

      <div className="container grid grid-cols-4 mt-6 gap-2 mx-auto">
        <div className="w-full h-full rounded">
          <img
            className="grid max-h-full max-w-full place-items-center"
            src="https://i.imgur.com/MOiyc9H.png"
            alt="image"
          />
        </div>
        <div className="w-full h-full rounded">
          <img
            className="grid max-h-full max-w-full place-items-center"
            src="https://i.imgur.com/MqxqINE.png"
            alt="image"
          />
        </div>
        <div className="w-full h-full rounded">
          <img
            className="grid max-h-full max-w-full place-items-center"
            src="https://i.imgur.com/BfEY1Cy.png"
            alt="image"
          />
        </div>
        <div className="w-full h-full rounded">
          <img
            className="grid max-h-full max-w-full place-items-center"
            src="https://i.imgur.com/bfK5HS4.png"
            alt="image"
          />
        </div>
      </div>
    </>
  );
};

export default Icons;
