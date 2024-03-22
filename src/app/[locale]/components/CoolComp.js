"use client"
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function coolComp() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <section className='py-12 md:py-24 bg-neutral-900'>
        <div className='container mx-auto px-4'>
          <div className='px-5 mb-12 max-w-8xl mx-auto'>
            <div className='border-t border-neutral-600'>
              <p className='pt-2 text-4xl text-white font-semibold tracking-tight mx-auto'>
                New projects
              </p>
            </div>
          </div>
          <div className='flex justify-center -m-5 max-w-8xl mx-auto'>
            <div className='hidden xl:block flex-shrink-0 w-full p-5'>
              <div
                className='mb-8 overflow-hidden rounded-4xl'
                style={{ height: 836 }}
              >
                <img
                  className='w-full h-full object-cover'
                  src='mirga-assets/images/projects/pic.jpg'
                  alt=''
                />
              </div>
            </div>
            <div className='xl:flex-shrink-0 w-full p-5'>
              <div
                className='mb-8 overflow-hidden rounded-4xl'
                style={{ height: 836 }}
              >
                <img
                  className='w-full h-full object-cover'
                  src='mirga-assets/images/projects/pic.jpg'
                  alt=''
                />
              </div>
              <div className='flex flex-wrap justify-between items-center -m-2'>
                <div className='w-auto p-2'>
                  <span className='inline-block text-xl text-neutral-400 font-semibold tracking-tight'>
                    Project
                  </span>
                </div>
                <div className='w-auto p-2'>
                  <div className='flex items-center'>
                    <div className='w-auto p-2'>
                      <a className='inline-block' href='#'>
                        <svg
                          className='inline-block'
                          width={18}
                          height={18}
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9 18L10.2915 16.7463L3.4452 9.9L18 9.9L18 8.1L3.4452 8.1L10.2726 1.2726L9 3.02789e-06L7.86805e-07 9L9 18Z'
                            fill='white'
                          />
                        </svg>
                      </a>
                    </div>
                    <div className='w-auto p-2'>
                      <span className='inline-block text-xl text-neutral-400 font-semibold'>
                        1/12
                      </span>
                    </div>
                    <div className='w-auto p-2'>
                      <a className='inline-block' href='#'>
                        <svg
                          className='inline-block'
                          xmlns='http://www.w3.org/2000/svg'
                          width={18}
                          height={18}
                          viewBox='0 0 18 18'
                          fill='none'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9 0L7.7085 1.2537L14.5548 8.1L0 8.1L0 9.9L14.5548 9.9L7.7274 16.7274L9 18L18 9L9 0Z'
                            fill='white'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h6 className='mb-2 text-5xl text-white font-medium font-heading'>
                Weddedone digital
              </h6>
              <p className='mb-6 text-xl font-medium text-neutral-400 tracking-tight'>
                Unlock the power of data with our advanced analytics tools.
              </p>
              <a
                className='inline-flex items-center justify-center text-center h-16 p-5 font-semibold text-lg text-white tracking-tight bg-neutral-800 hover:bg-neutral-700 focus:bg-neutral-700 rounded-lg focus:ring-4 focus:ring-neutral-800 transition duration-200'
                href='#'
              >
                See the project
              </a>
            </div>
            <div className='hidden xl:block flex-shrink-0 w-full p-5'>
              <div
                className='mb-8 overflow-hidden rounded-4xl'
                style={{ height: 836 }}
              >
                <img
                  className='w-full h-full object-cover'
                  src='mirga-assets/images/projects/pic.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}