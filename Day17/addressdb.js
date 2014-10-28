var AddressDB = {
	db : null,
	createDatabase : function(dbName,version,description){
		this.db = openDatabase(dbName,version,description,4332434);
	},
	executeQuery : function(query,params,success,error){
		this.db.transaction(function(txn){
			txn.executeSql(query,
				params,
				function(tx,result){
					if(success)
						success(result);
				},
				function(tx,err){
					if(error)
						error(err);
				});
		});
	}
};