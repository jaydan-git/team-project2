export const Student = ({name, action}) => {
    return (
        <div className="card">
            <h2>Student {name}</h2>
            <div className="action-container">
                {/* Tambahkan action untuk student juga */}
                {action && action(name)}
            </div>
        </div>
    )
}