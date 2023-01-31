import { useState } from 'react';
import { Emoji } from 'react-apple-emojis';
import emojiData from 'react-apple-emojis/src/data.json';

function FeaturesBlocks() {
  const [features, setFeatures] = useState([
    {
      scopeTitle: 'Logistics',
      scopeColor: 'bg-blue-200',
      title: 'Clearer pricing plan',
      statusColor: 'bg-green-200',
      emoji: '',
      votes: '👍🏻 32',
    },
    {
      scopeTitle: 'App',
      scopeColor: 'bg-gray-300',
      title: 'Repeat/Shuffle button',
      status: 'In Progress',
      statusColor: 'bg-green-200',
      emoji: '',
      votes: 32,
    },
    {
      scopeTitle: 'App',
      scopeColor: 'bg-gray-300',
      title: 'Editable custom shortcuts',
      status: 'Testing',
      statusColor: 'bg-yellow-200',
      emoji: '',
      votes: 32,
    },
    {
      scopeTitle: 'App',
      scopeColor: 'bg-gray-300',
      title: 'Enhanced preferences page',
      status: 'In Progress',
      statusColor: 'bg-green-200',
      emoji: '',
      votes: 32,
    },
    {
      scopeTitle: 'App',
      scopeColor: 'bg-gray-300',
      title: 'Volume control knob',
      statusColor: 'bg-green-200',
      emoji: '',
      votes: 32,
    },
    {
      scopeTitle: 'App',
      scopeColor: 'bg-gray-300',
      title: 'List of previously played songs (popup) ',
      status: 'Backlog',
      statusColor: 'bg-purple-200',
      emoji: '',
      votes: 32,
    },
    {
      scopeTitle: 'App',
      scopeColor: 'bg-gray-300',
      title: 'Installation via brew',
      statusColor: 'bg-green-200',
      emoji: '',
      votes: 32,
    },
    {
      scopeTitle: 'App',
      scopeColor: 'bg-gray-300',
      title: 'Star current song',
      status: 'Backlog',
      statusColor: 'bg-purple-200',
      emoji: '',
      votes: 32,
    },
    {
      scopeTitle: 'App',
      scopeColor: 'bg-gray-300',
      title: 'Minified final build',
      status: 'In Progress',
      statusColor: 'bg-green-200',
      emoji: '',
      votes: 32,
    },
    {
      scopeTitle: 'App',
      scopeColor: 'bg-gray-300',
      title: 'Minified final build',
      statusColor: 'bg-green-200',
      emoji: '',
      votes: 32,
    },
  ]);
  const chunkSize = Math.ceil(features.length / 3);
  const results = [
    features.slice(0, chunkSize),
    features.slice(chunkSize, chunkSize * 2),
    features.slice(chunkSize * 2),
  ];

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

          <div className="flex space-between">
            {results.map((result) => {
              return (
                <div className="w-[33%]">
                  {result.map((feat, key) => {
                    return (
                      <div
                        className="relative flex-col items-center p-6 bg-white rounded-xl shadow-xl m-3"
                        key={key}
                      >
                        <div className="flex">
                          <div className={`bg-gray-200 rounded-full px-3 block font-medium text-md text-center`}>
                            {feat.scopeTitle}
                          </div>
                          {feat.status ? (
                            <div
                              className={`${feat.statusColor} rounded-full px-3 mx-1 block font-medium text-md text-center`}
                            >
                              {feat.status}
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                        <div className="flex justify-between">
                          <p className="text-gray-600 text-left text-lg mt-3 ml-1 font-medium">{feat.title}</p>
                          <div>
                            <div
                              className={`rounded-full px-3 bg-gray-300 mx-1 mt-4 block font-medium text-md text-center`}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
