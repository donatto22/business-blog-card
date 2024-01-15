import './blogCard.css'

const BusinessBlogCard = () => {
	return (
		<div id="fakeBody">
			<div id="card">
				<div id="card-img">
					<img src="./card-image.webp" alt="Bussines card image" />

					<div className="wave">
						<img src="./white-overlay.svg" alt="wave overlay" />
					</div>
				</div>

				<div id="card-content">
					<div className="title card-content-title">
						<text>Perfect solution for small business</text>
					</div>

					<div className="description card-content-description">
						<div>Small business need to generate leads to grow.</div>
						<div>You can use tools like Ringy</div>
					</div>
				</div>

				<div id="card-profile">
					<div id="profile-image">
						<img src="./avatar.webp" alt="amy avatar" />
					</div>

					<div id="profile-content">
						<div className="title profile-title">
							Amy Burgess
						</div>

						<div className="description profile-description">
							<div>Customer Manger, Solution Oy</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BusinessBlogCard
