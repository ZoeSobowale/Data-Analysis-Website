SELECT AVG(`homeless in priority need White`) into @a FROM 2011_2012;
SELECT AVG(`homeless in priority need Asian or Asian British`) INTO @b FROM 2011_2012;
SELECT AVG(`homeless in priority need Mixed`) INTO @c FROM 2011_2012;
SELECT AVG(`homeless in priority need Other ethnic origin`) INTO @d FROM 2011_2012;
SELECT AVG(`homeless in priority need Ethnic Group not Stated`) INTO @e FROM 2011_2012;
SELECT AVG(`homeless in priority need total`) INTO @f FROM 2011_2012;
SELECT AVG(`Number accepted per 1000 households`) INTO @g FROM 2011_2012;
SELECT AVG(`Total decisions eligible homeless priority need intentionally`) INTO @h FROM 2011_2012;
SELECT AVG(`Total decisions eligible not homeless`) into @i FROM 2011_2012;
SELECT AVG(`Total homelessness decisions`) into @j FROM 2011_2012;

INSERT INTO `averages` (`year`,`homeless in priority need White`,`homeless in priority need Asian or Asian British`,`homeless in priority need Mixed`,`homeless in priority need Other ethnic origin`,`homeless in priority need Ethnic Group not Stated`,`homeless in priority need total`,`Number accepted per 1000 households`,`Total decisions eligible homeless priority need intentionally`,`Total decisions eligible not homeless`,`Total homelessness decisions`) VALUES ("2011_2012",@a,@b,@c,@d,@e,@f,@g,@h,@i,@j);


