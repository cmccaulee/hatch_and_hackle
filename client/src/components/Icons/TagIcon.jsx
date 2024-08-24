const TagIcon = (props) => {
    const { tag, icon } = props;
    return (
        <>
            <div className="bg-secondary bg-opacity-25 px-4 py-2 rounded-full flex align-text-bottom max-w-xs">
                <img src={icon} alt={tag} className="max-w-6 h-6" />
                <p className="font-semibold">{tag}</p>
            </div>
        </>
    );
};
export default TagIcon;
