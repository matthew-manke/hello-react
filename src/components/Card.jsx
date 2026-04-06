import { Children } from 'react';

function Card({ children }) {
        return (
                <>
                        <div className="hello-card">
				{ Children.map(children, child => 
					<div className="hello-card-child">{child}</div>
				)}
                        </div>
                </>
        )
}

export default Card
