import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>Content1</div>
            <div className="expense-item__description">
                <h2 className="">Content2</h2>
                <div className="expense-item__price">Content3</div>
            </div>
        </div>
    );
}
export default ExpenseItem;