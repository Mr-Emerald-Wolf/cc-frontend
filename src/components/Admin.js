import React from 'react'
import { useStore } from '../store'
import Inventory from './Inventory';

export default function Admin() {
  const data = useStore((state) => state.data)
  // console.log(data);

 

  return (
    <>
      <div className="min-h-screen p-2 bg-slate-100">
        <div class="overflow-hidden bg-white shadow sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Admin</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">Admin Control Panel</p>
          </div>
          <div class="border-t border-gray-200">
            <dl>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Full name</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.firstName + " " + data.lastName}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Email address</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.email}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Role</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.role}</dd>
              </div>
            </dl>
          </div>
        </div>
       
             <Inventory/>
      </div>

    </>
  )
}
