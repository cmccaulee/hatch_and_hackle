const TopNav = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl font-rocksalt">
                    Hatch & Hackle
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Sign In</a>
                    </li>
                    <li>
                        <details>
                            <summary>Patterns</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li>
                                    <a>Dry Flies</a>
                                </li>
                                <li>
                                    <a>Nymphs</a>
                                </li>
                                <li>
                                    <a>Streamers</a>
                                </li>
                                <li>
                                    <a>Stillwater Flies</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default TopNav;
