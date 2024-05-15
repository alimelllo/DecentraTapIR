import { Menu, Transition, Dialog } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

const BurgerMenu = (props: any): any => {

    return (
        <>
            <Transition appear show={props.isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={props.closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 blurEffect" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#080808] p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-[#d5d5d5] "
                                    >
                                        Login with
                                    </Dialog.Title>

                                    <div className="w-full h-[20vh] md:mt-10 flex flex-col gap-y-5 justify-center items-center">
                                        <button className="bg-[#ca3609] text-xl md:text-base w-6/12 md:w-10/12 px-5 py-2 text-white rounded-md transition-all duration-150 hover:bg-[#b12900] priceShadow">Meta Mask Wallet</button>
                                        <button className="bg-[#0956ca] text-xl md:text-base w-6/12 md:w-10/12 px-5 py-2 text-white rounded-md transition-all duration-150 hover:bg-[#043785] priceShadow">CoinBase Wallet</button>
                                    </div>
                                    <div className="mt-4 md:mt-10">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-[#303030] px-4 py-2 text-sm font-medium text-[white] outline-none"
                                            onClick={props.closeModal}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <Menu as="div" className="relative text-center ">
                {({ open }) => (
                    <>
                        <Menu.Button className={'flex items-center'}>
                            <input type="checkbox " id="checkbox" className={`${open ? 'open' : ''} `} />
                            <label className="toggle mb-2 ">
                                <div className="bars" id="bar1"></div>
                                <div className="bars" id="bar2"></div>
                                <div className="bars" id="bar3"></div>
                            </label>
                        </Menu.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            {open ?
                                <Menu.Items className="absolute right-0 top-14 !font-[Yekan] rounded-xl shadow-xl bg-transparent text-[1rem] md:right-[-100%] mt-2 w-[100vw] focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={props.openModal}
                                                type="submit"
                                                className={classNames(
                                                    `block w-full pr-7 py-4 hover:bg-[#e0e0e0] rounded-t-3xl transition-all duration-200 text-xl text-black text-right`
                                                )}>
                                                {'کیف پول'}
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={props.openModal}
                                                type="submit"
                                                className={classNames(
                                                    `block w-full pr-7 py-4 hover:bg-[#e0e0e0] rounded-t-3xl transition-all duration-200 text-xl text-black text-right`
                                                )}>
                                                {'کد معرف'}
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={props.openModal}
                                                type="submit"
                                                className={classNames(
                                                    `block w-full pr-7 py-4 hover:bg-[#e0e0e0] rounded-t-3xl transition-all duration-200 text-xl text-black text-right`
                                                )}>
                                                {'ساخت فروشگاه'}
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href={'/Blog'}>
                                                <button
                                                    type="submit"
                                                    className={classNames(
                                                        `block w-full pr-7 py-4 hover:bg-[#e0e0e0] transition-all duration-200 text-xl text-black text-right`
                                                    )}>
                                                    {'داشبورد'}
                                                </button>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href={'/Blog'}>
                                                <button
                                                    type="submit"
                                                    className={classNames(
                                                        `block w-full pr-7 py-4 hover:bg-[#e0e0e0] rounded-b-3xl transition-all duration-200 text-xl text-black text-right`
                                                    )}>
                                                    {'خروج'}
                                                </button>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </Menu.Items> : <></>}
                        </Transition>
                    </>
                )}
            </Menu>
        </>
    )
}

export default BurgerMenu;