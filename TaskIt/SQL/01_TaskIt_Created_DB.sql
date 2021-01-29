USE [master]
	
	IF db_id('TaskIt') IS NULL
	 CREATE DATABASE [TaskIt]
	GO

	USE [TaskIt]
	GO
	 
	DROP TABLE IF EXISTS [SubTask];
	DROP TABLE IF EXISTS [Task];
	DROP TABLE IF EXISTS [Priority];
	DROP TABLE IF EXISTS [Board];
	DROP TABLE IF EXISTS [UserProfile];
	GO
	 
	CREATE TABLE [Board] (
	 [Id] integer PRIMARY KEY identity NOT NULL,
	 [Name] nvarchar(255) NOT NULL,
	 [UserProfileId] integer NOT NULL

	)
	
	 
	CREATE TABLE [Task] (
	 [Id] integer PRIMARY KEY identity NOT NULL,
     [Name] nvarchar (255) NOT NULL,
	 [Notes] nvarchar(255) NOT NULL,
     [SubTask] nvarchar(255) NOT NULL,
     [PriorityId] integer  NOT NULL,
     [IsComplete] bit NOT NULL,
     [DateCreated] datetime NOT NULL,
     [BoardId] integer NOT NULL

	)

	 
	CREATE TABLE [SubTask] (
	 [Id] integer PRIMARY KEY identity NOT NULL,
     [Name] nvarchar (255) NOT NULL,
     [IsComplete] bit NOT NULL,
	 [TaskId] integer NOT NULL

	)


     CREATE TABLE [Priority] (
	  [Id] integer PRIMARY KEY identity NOT NULL,
      [Name] nvarchar (50) NOT NULL,
	
	)

 
	CREATE TABLE [UserProfile] (
	 [Id] integer PRIMARY KEY identity NOT NULL,
	 [Name] nvarchar(255) NOT NULL,
	 [Email] nvarchar(255) NOT NULL,
	 [FirebaseUserId] NVARCHAR(28) NOT NULL,

	  CONSTRAINT UQ_FirebaseUserId UNIQUE(FirebaseUserId),
	  CONSTRAINT UQ_Email UNIQUE(Email)

	)


	
ALTER TABLE [Board] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])


ALTER TABLE [Task] ADD FOREIGN KEY ([PriorityId]) REFERENCES [Priority] ([Id])


ALTER TABLE [Task] ADD FOREIGN KEY ([BoardId]) REFERENCES [Board] ([Id])


ALTER TABLE [SubTask] ADD FOREIGN KEY ([TaskId]) REFERENCES [Task] ([Id])
GO

