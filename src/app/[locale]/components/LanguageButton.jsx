"use client"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { GlobalOutlined } from '@ant-design/icons';
import {Avatar} from "@nextui-org/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-center">
      <div>
        <Menu.Button className="inline-flex justify-center gap-x-1.5 text-2xl sm:text-4xl mr-8 sm:mr-16 font-normal text-black shadow-sm">
        <GlobalOutlined className='transition-transform duration-300 ease-in-out hover:scale-110' />
        </Menu.Button>
      </div>

      
        <Menu.Items className="absolute right-0 z-10 mt-2 w-44 bg-white border-1">
          <div>
          <Menu.Item>
  {({ active }) => (
    <a
      href="/en"
      className={classNames(
        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
        'block px-4 py-2 text-m',
        'inline-flex items-center' // This ensures items are aligned inline and centered
      )}
    >
      <Avatar alt="USA" className="w-7 h-7 mr-2" src="https://flagcdn.com/us.svg" /> English
    </a>
  )}
</Menu.Item>
<Menu.Item>
  {({ active }) => (
    <a
      href="/de"
      className={classNames(
        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
        'block px-4 py-2 text-m',
        'inline-flex items-center' // This ensures alignment and centering here as well
      )}
    >
      <Avatar alt="Germany" className="w-7 h-7 mr-2" src="https://flagcdn.com/de.svg" /> Deutsch
    </a>
  )}
</Menu.Item>

           
          </div>
        </Menu.Items>
    </Menu>
  )
}