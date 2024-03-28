import PostForm from "@/components/forms/PostForm";

const CreatePost = () => {
	return (
		<div className="flex flex-1">
			<div className="common-container">
				<div className="max-w-5xl flex-start gap-3 justify-start w-full">
					<img src="/assets/icons/add-post.svg" height={36} width={36} alt="AddPost" />
					<h2 className="h3-bold md:h2-bold text-ledt w-full">Create Post</h2>
				</div>

				<PostForm />
			</div>
		</div>
	);
};

export default CreatePost;
