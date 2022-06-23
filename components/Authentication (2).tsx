import React, { FC } from 'react';

interface IProps {
	data: string;
}
const Authentication: FC<IProps> = ({ data }) => {
	return (
		<div className="authentication">
			<h3 className="heading-3 u-margin-bottom-small">Sample Login Details</h3>
			<div className="authentication__row">
				{data.split(';').map((auth) => (
					<div className="authentication__col" key={auth}>
						<ul className="authentication__list">
							{auth.split(',').map((user) => (
								<React.Fragment>
									<li className="authentication__item paragraph" key={user}>
										{user}
									</li>
								</React.Fragment>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};
export default Authentication;
