import { useState } from 'react';
import { Emoji } from 'react-apple-emojis';
import emojiData from 'react-apple-emojis/src/data.json';

function FeaturesBlocks() {
  const [features, setFeatures] = useState([
    {
      scopeTitle: 'App',
      scopeColor: 'bg-red-200',
      title: 'Clearer pricing plan',
      status: 'In Progress',
      statusColor: 'bg-green-200',
      emoji: '',
      votes: 32,
    },
    {
      scopeTitle: 'App',
      scopeColor: 'bg-red-200',
      title: 'Enhanced preferences page',
      status: 'In Progress',
      statusColor: 'bg-green-200',
      emoji: '',
      votes: 32,
    },
    {
      scopeTitle: 'App',
      scopeColor: 'bg-red-200',
      title: 'Editable custom shortcuts',
      status: 'In Progress',
      statusColor: 'bg-green-200',
      emoji: '',
      votes: 32,
    },
    {
      scopeTitle: 'App',
      scopeColor: 'bg-red-200',
      title: 'Repeat/Shuffle button',
      status: 'In Progress',
      statusColor: 'bg-green-200',
      emoji: '',
      votes: 32,
    },
    {
      scopeTitle: 'App',
      scopeColor: 'bg-red-200',
      title: 'Volume control knob',
      status: 'In Progress',
      statusColor: 'bg-green-200',
      emoji: '',
      votes: 32,
    },
    {
      scopeTitle: 'App',
      scopeColor: 'bg-red-200',
      title: 'List of previously played songs',
      status: 'In Progress',
      statusColor: 'bg-green-200',
      emoji: '',
      votes: 32,
    },
    {
      scopeTitle: 'App',
      scopeColor: 'bg-red-200',
      title: 'Installation via brew',
      status: 'In Progress',
      statusColor: 'bg-green-200',
      emoji: '',
      votes: 32,
    },
    {
      scopeTitle: 'App',
      scopeColor: 'bg-red-200',
      title: 'Star current song',
      status: 'In Progress',
      statusColor: 'bg-green-200',
      emoji: '',
      votes: 32,
    },
    {
      scopeTitle: 'App',
      scopeColor: 'bg-red-200',
      title: 'Minified final build',
      status: 'In Progress',
      statusColor: 'bg-green-200',
      emoji: '',
      votes: 32,
    },
    {
      scopeTitle: 'App',
      scopeColor: 'bg-red-200',
      title: 'Minified final build',
      status: 'In Progress',
      statusColor: 'bg-green-200',
      emoji: '',
      votes: 32,
    },
  ]);
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Roadmap</h2>
            <p className="text-xl text-gray-600">
              Our MVP brings only the bare essentials.
              <br />
              Cast your vote and join us to build the features the brings the most value.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {features.map((feat, key) => {
              return (
                <div
                  className="relative flex-col items-center p-6 bg-white rounded-xl shadow-xl"
                  key={key}
                >
                  <div className="flex">
                    <div className={`${feat.scopeColor} rounded-full px-3 block font-medium text-md text-center`}>
                      {feat.scopeTitle}
                    </div>
                    <div className={`${feat.statusColor} rounded-full px-3 mx-1 block font-medium text-md text-center`}>
                      {feat.status}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600 text-left text-lg mt-3 ml-1 font-medium">{feat.title}</p>
                    <div>
                      <div className={`rounded-full px-3 bg-gray-300 mx-1 mt-4 block font-medium text-md text-center`}>
                        {feat.votes}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
