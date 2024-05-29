module.exports = {
    paths: {
      "/create": {
        post: {
          tags: {
            Task: ": Create a task in Swagger ",
          },
          description: "Create task",
          operationId: "createTask",
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Task",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Task created successfully",
            },
            500: {
              description: "Server error",
            },
          },
        }
      },"/id/{_id}": {
        put: {
          tags: {
            Tasks: "Update a user",
          },
          description: "Update User",
          operationId: "updateUser",
          parameters: [
            {
              name: "_id",
              in: "path",
              schema: {
                $ref: "#/components/schemas/_id",
              },
              description: "Id of Task to be updated",
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Task" },
              },
            },
          },
          responses: {
            200: { description: "User updated successfully" },
            500: { description: "Server error" },
          },
        },
      },
  
    },
  };
  