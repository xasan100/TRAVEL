import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import i18n from "i18next";
import uzb from "../../assets/uzb.svg";
import eng from "../../assets/eng.svg";
import rus from "../../assets/rus.svg";
import arb from "../../assets/arb.svg";
import { FlagIcon, Logo, UzbFlag } from "../../assets/icon";
import { useTranslation } from "react-i18next";
import "./navbar.css";

const languages = [
  {
    code: "uz",
    icon: uzb,
    name: "Uz",
  },
  {
    code: "en",
    icon: eng,
    name: "En",
  },
  {
    code: "ru",
    icon: rus,
    name: "Ру",
  },
  {
    code: "ar",
    icon: arb,
    name: "Ar",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const { t } = useTranslation();
  const navigation = [
    { name: `${t("main")}`, href: "/", current: false },
    { name: `${t("citys")}`, href: "/cites", current: false },
    { name: `${t("pilgrimage")}`, href: "/umrah", current: false },
    { name: `${t("attractions")}`, href: "/attractions", current: false },
    { name: `${t("gallery")}`, href: "/questions", current: false },
    { name: `${t("about_Us")}`, href: "/aboutus", current: false },
    { name: `${t("сommunication")}`, href: "/contacts", current: false },
  ];
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800 top-0">
        {({ open }) => (
          <>
            <div className="mx-auto z-50 absolute w-full">
              <div className="relative flex items-center justify-between h-16 ml-5">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                    <span className="hidden lg:block h-8 w-auto mb-10">
                      <Logo />
                    </span>
                  </div>
                  <div className="hidden sm:block sm:ml-20 mt-4">
                    <div className="flex space-x-4 ml-3">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-2 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4" style={{ marginLeft: "50px" }}>
                    <Menu as="div" className="relative inline-block text-left">
                      <div className="flex">
                        <Menu.Button className="ml-5 inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={33}
                            fill="currentColor"
                            className="bi bi-globe"
                            viewBox="0 0 16 16"
                            style={{ color: "#fff", marginBottom: "10px" }}
                          >
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                          </svg>
                          <span className="mt-3 ml-3">
                            <FlagIcon />
                          </span>
                        </Menu.Button>
                        <span className="ml-5 mt-2">
                          <UzbFlag />
                        </span>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute ml-[-10px] mt-2 w-[110px] rounded-md ring-2 border-solid border-1">
                          <div className="py-3">
                            {languages.map((item) => (
                              <Menu.Item
                                className="mb-2 flex cursor-pointer"
                                onClick={() => i18n.changeLanguage(item.code)}
                              >
                                <div>
                                  <h3 className="text-white ml-3">
                                    {item.name}
                                  </h3>
                                  <div className="ml-4">
                                    <img src={item.icon} alt="" />
                                  </div>
                                </div>
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
              <hr />
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default Navbar;
