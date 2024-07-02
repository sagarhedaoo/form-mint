"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Upgrade = () => {
  const { user } = useUser();
  return (
    <div>
      {/* <!-- Features --> */}
      <div class="overflow-hidden">
        <div class="max-w-[85rem] py-10 sm:px-6 lg:px-8 mx-auto">
          {/* <!-- Title --> */}
          <div class="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
            <h2 class="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">
              Solo, agency or team? We’ve got you covered.
            </h2>
          </div>
          {/* <!-- End Title --> */}

          <div class="relative ">
            {/* <!-- Grid --> */}
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 h-full">
              <div>
                {/* <!-- First Card --> */}
                <div class="p-4 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-neutral-900 dark:border-neutral-800 ">
                  <h3 class="text-xl font-bold text-gray-800 dark:text-neutral-200">
                    Free plan: Basic
                  </h3>
                  <div class="text-sm text-gray-500 dark:text-neutral-500">
                    Get Started with 3 Free Forms Every Month
                  </div>

                  <div class="mt-5">
                    <span class="text-6xl font-bold text-gray-800 dark:text-neutral-200">
                      $0
                    </span>
                    <span class="text-lg font-bold text-gray-800 dark:text-neutral-200">
                      .00
                    </span>
                    <span class="ms-3 text-gray-500 dark:text-neutral-500">
                      USD / monthly
                    </span>
                  </div>

                  <div class="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                    {/* <!-- List --> */}
                    <ul class="space-y-2 text-sm sm:text-base">
                      <li class="flex space-x-3">
                        <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <Image
                            className="flex-shrink-0 size-3.5"
                            src="/tick.svg"
                            height={24}
                            width={24}
                            alt="tick"
                          />
                        </span>
                        <span class="text-gray-800 text-sm dark:text-neutral-200">
                          Up to 3 Forms per Month
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <Image
                            className="flex-shrink-0 size-3.5"
                            src="/tick.svg"
                            height={24}
                            width={24}
                            alt="tick"
                          />
                        </span>
                        <span class="text-gray-800 text-sm dark:text-neutral-200">
                          Basic Templates
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <Image
                            className="flex-shrink-0 size-3.5"
                            src="/tick.svg"
                            height={24}
                            width={24}
                            alt="tick"
                          />
                        </span>
                        <span class="text-gray-800 text-sm dark:text-neutral-200">
                          Basic Analytics
                        </span>
                      </li>
                    </ul>
                    {/* <!-- End List --> */}

                    {/* <!-- List --> */}
                    <ul class="space-y-2 text-sm sm:text-base">
                      <li class="flex space-x-3">
                        <span class="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                          <Image
                            className="flex-shrink-0 size-3.5"
                            src="/cross.svg"
                            height={24}
                            width={24}
                            alt="cross"
                          />
                        </span>
                        <span class="text-gray-800 text-sm dark:text-neutral-200">
                          No advanced templates
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <span class="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                          <Image
                            className="flex-shrink-0 size-3.5"
                            src="/cross.svg"
                            height={24}
                            width={24}
                            alt="cross"
                          />
                        </span>
                        <span class="text-gray-800 text-sm dark:text-neutral-200">
                          No advanced field types
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <span class="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                          <Image
                            className="flex-shrink-0 size-3.5"
                            src="/cross.svg"
                            height={24}
                            width={24}
                            alt="cross"
                          />
                        </span>
                        <span class="text-gray-800 text-sm dark:text-neutral-200">
                          Limited customization options
                        </span>
                      </li>
                    </ul>
                    {/* <!-- End List --> */}
                  </div>

                  <div class="grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                    <div></div>

                    <div class="flex justify-end">
                      <button
                        type="button"
                        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800"
                      >
                        Current
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- First End Card --> */}
              </div>

              <div>
                {/* <!-- Second Card --> */}
                <div class="shadow-xl shadow-gray-200 p-5 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-neutral-900 dark:border-neutral-800 dark:shadow-gray-900/20">
                  <h3 class="text-xl font-bold text-gray-800 dark:text-neutral-200">
                    Monthly Plan: Pro
                  </h3>
                  <div class="text-sm text-gray-500 dark:text-neutral-500">
                    Unlock Advanced Features with Pro Monthly Plan
                  </div>
                  <span class="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-white dark:text-neutral-800">
                    Most popular
                  </span>

                  <div class="mt-5">
                    <span class="text-6xl font-bold text-gray-800 dark:text-neutral-200">
                      $4
                    </span>
                    <span class="text-lg font-bold text-gray-800 dark:text-neutral-200">
                      .00
                    </span>
                    <span class="ms-3 text-gray-500 dark:text-neutral-500">
                      USD / monthly
                    </span>
                  </div>

                  <div class="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                    {/* <!-- List --> */}
                    <ul class="space-y-2 text-sm sm:text-base">
                      <li class="flex space-x-3">
                        <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <Image
                            className="flex-shrink-0 size-3.5"
                            src="/tick.svg"
                            height={24}
                            width={24}
                            alt="tick"
                          />
                        </span>
                        <span class="text-gray-800 text-sm dark:text-neutral-200">
                          10 Forms per Month
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <Image
                            className="flex-shrink-0 size-3.5"
                            src="/tick.svg"
                            height={24}
                            width={24}
                            alt="tick"
                          />
                        </span>
                        <span class="text-gray-800 text-sm dark:text-neutral-200">
                          Advanced Analytics
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <Image
                            className="flex-shrink-0 size-3.5"
                            src="/tick.svg"
                            height={24}
                            width={24}
                            alt="tick"
                          />
                        </span>
                        <span class="text-gray-800 text-sm dark:text-neutral-200">
                          Integrations
                        </span>
                      </li>
                    </ul>
                    {/* <!-- End List --> */}

                    {/* <!-- List --> */}
                    <ul class="space-y-2 text-sm sm:text-base">
                      <li class="flex space-x-3">
                        <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <Image
                            className="flex-shrink-0 size-3.5"
                            src="/cross.svg"
                            height={24}
                            width={24}
                            alt="cross"
                          />
                        </span>
                        <span class="text-gray-800 text-sm dark:text-neutral-200">
                          No dedicated account manager
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <Image
                            className="flex-shrink-0 size-3.5"
                            src="/cross.svg"
                            height={24}
                            width={24}
                            alt="cross"
                          />
                        </span>
                        <span class="text-gray-800 text-sm dark:text-neutral-200">
                          No additional discounts
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <Image
                            className="flex-shrink-0 size-3.5"
                            src="/cross.svg"
                            height={24}
                            width={24}
                            alt="cross"
                          />
                        </span>
                        <span class="text-gray-800 text-sm dark:text-neutral-200">
                          No access to premium add-ons
                        </span>
                      </li>
                    </ul>
                    {/* <!-- End List --> */}
                  </div>

                  <div class="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                    <div>
                      <p class="text-sm text-gray-500 dark:text-neutral-500">
                        Cancel anytime.
                      </p>
                      <p class="text-sm text-gray-500 dark:text-neutral-500">
                        No card required.
                      </p>
                    </div>

                    <div class="flex justify-end">
                      <Link
                        href={
                          "https://buy.stripe.com/test_00g8xu6Kqf8XbTO5kn" +
                          "?prefilled_email=" +
                          user?.primaryEmailAddress?.emailAddress
                        }
                        target="_blank"
                      >
                        <button
                          type="button"
                          class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Start free trial
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <!-- Second End Card --> */}
              </div>

              <div>
                {/* <!-- Third Card --> */}
                <div class="shadow-xl shadow-gray-200 p-5 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-neutral-900 dark:border-neutral-800 dark:shadow-gray-900/20">
                  <h3 class="text-xl font-bold text-gray-800 dark:text-neutral-200">
                    Yearly Plan: Premium
                  </h3>
                  <div class="text-sm text-gray-500 dark:text-neutral-500">
                    Go Premium for Maximum Value and Support
                  </div>
                  <span class="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-white dark:text-neutral-800">
                    Most popular
                  </span>

                  <div class="mt-5">
                    <span class="text-6xl font-bold text-gray-800 dark:text-neutral-200">
                      $36
                    </span>
                    <span class="text-lg font-bold text-gray-800 dark:text-neutral-200">
                      .00
                    </span>
                    <span class="ms-3 text-gray-500 dark:text-neutral-500">
                      USD / monthly
                    </span>
                  </div>

                  <div class="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                    {/* <!-- List --> */}
                    <ul class="space-y-2 text-sm sm:text-base">
                      <li class="flex space-x-3">
                        <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <Image
                            className="flex-shrink-0 size-3.5"
                            src="/tick.svg"
                            height={24}
                            width={24}
                            alt="tick"
                          />
                        </span>
                        <span class="text-gray-800 text-sm dark:text-neutral-200">
                          Unlimited Forms
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <Image
                            className="flex-shrink-0 size-3.5"
                            src="/tick.svg"
                            height={24}
                            width={24}
                            alt="tick"
                          />
                        </span>
                        <span class="text-gray-800 text-sm dark:text-neutral-200">
                          All Templates
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <Image
                            className="flex-shrink-0 size-3.5"
                            src="/tick.svg"
                            height={24}
                            width={24}
                            alt="tick"
                          />
                        </span>
                        <span class="text-gray-800 text-sm dark:text-neutral-200">
                          Comprehensive Analytics
                        </span>
                      </li>
                    </ul>
                    {/* <!-- End List --> */}

                    {/* <!-- List --> */}
                    <ul class="space-y-2 text-sm sm:text-base">
                      <li class="flex space-x-3">
                        <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <Image
                            className="flex-shrink-0 size-3.5"
                            src="/tick.svg"
                            height={24}
                            width={24}
                            alt="tick"
                          />
                        </span>
                        <span class="text-gray-800 text-sm dark:text-neutral-200">
                          Priority Support
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <Image
                            className="flex-shrink-0 size-3.5"
                            src="/tick.svg"
                            height={24}
                            width={24}
                            alt="tick"
                          />
                        </span>
                        <span class="text-gray-800 text-sm dark:text-neutral-200">
                          Dedicated Account Manager
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <Image
                            className="flex-shrink-0 size-3.5"
                            src="/tick.svg"
                            height={24}
                            width={24}
                            alt="tick"
                          />
                        </span>
                        <span class="text-gray-800 text-sm dark:text-neutral-200">
                          Access to premium add-ons
                        </span>
                      </li>
                    </ul>
                    {/* <!-- End List --> */}
                  </div>

                  <div class="mt-10 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                    <div>
                      <p class="text-sm text-gray-500 dark:text-neutral-500">
                        Cancel anytime.
                      </p>
                      <p class="text-sm text-gray-500 dark:text-neutral-500">
                        No card required.
                      </p>
                    </div>

                    <div class="flex justify-end">
                      <Link
                        href={
                          "https://buy.stripe.com/test_28o8xu1q65yn3nibIK" +
                          "?prefilled_email=" +
                          user?.primaryEmailAddress?.emailAddress
                        }
                        target="_blank"
                      >
                        <button
                          type="button"
                          class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Start free trial
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <!-- Third End Card --> */}
              </div>
            </div>
            {/* <!-- End Grid --> */}

            {/* <!-- SVG Element --> */}
            <div class="hidden md:block absolute top-0 end-0 translate-x-16">
              <svg
                class="w-16 h-auto text-orange-500"
                width="121"
                height="135"
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            {/* <!-- End SVG Element --> */}

            {/* <!-- SVG Element --> */}
            <div class="hidden md:block absolute bottom-0 start-0 translate-y-16 -translate-x-16">
              <svg
                class="w-56 h-auto text-cyan-500"
                width="347"
                height="188"
                viewBox="0 0 347 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  stroke-width="7"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            {/* <!-- End SVG Element --> */}
          </div>

          <div class="mt-7 text-center">
            <p class="text-xs text-gray-400">Prices in USD. Taxes may apply.</p>
          </div>
        </div>
      </div>
      {/* <!-- End Features --> */}
    </div>
  );
};

export default Upgrade;
