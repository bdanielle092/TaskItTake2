SET IDENTITY_INSERT [UserProfile] ON
	INSERT INTO [UserProfile]
	 ([Id], [Name], [Email], [FireBaseUserId])
	VALUES 
	 (1, 'Lacey Barr', 'lacey@email.com', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx');
	INSERT INTO [UserProfile]
        ([Id], [Name], [Email], [FireBaseUserId])
	VALUES 
	 (2, 'Sam Barker', 'sam@email.com', 'zzzzzzzzzzzzzzzzzzzzzzzzzzzz');
	SET IDENTITY_INSERT [UserProfile] OFF

	SET IDENTITY_INSERT [Board] ON
	INSERT INTO [Board]
	 ([Id], [Name], [UserProfileId])
	VALUES
	 (1, 'Personal', 1),
	 (2, 'Work', 1);

	SET IDENTITY_INSERT [Board] OFF

	SET IDENTITY_INSERT [Priority] ON
    insert into [Priority] (Id, Name) values (1, 'none');
	insert into [Priority] (Id, Name) values (2, 'low');
	insert into [Priority] (Id, Name) values (3, 'medium');
	insert into [Priority] (Id, Name) values (4, 'high');
	SET IDENTITY_INSERT [Priority] OFF

	SET IDENTITY_INSERT [Task] ON
	INSERT INTO [Task]
	 ([Id], [Name], [Notes], [PriorityID], [IsComplete], [DateCreated], [BoardId])
	VALUES
	 (1, 'Meet with Adam', 'Capstone Approval', 1, 0, '01-23-2020', 2);
	SET IDENTITY_INSERT [Task] OFF

	SET IDENTITY_INSERT [SubTask] ON
	INSERT INTO [SubTask]
	 ([Id], [Name], [IsComplete], [TaskId])
	VALUES
	 (1, 'ERD', 0, 1);
	SET IDENTITY_INSERT [SubTask] OFF

